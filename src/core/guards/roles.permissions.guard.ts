import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Module } from '../enums/module.enum';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const controller = context.getClass().name;

        const module: Module = controller
            .split('Controller')[0]
            .toUpperCase() as Module;
        const userId = request?.user?.id;

        const process = this.reflector.getAllAndOverride('process', [
            context.getHandler(),
            context.getClass(),
        ]);

        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        // const userPermissions: GroupedPermissions = await this.common.findUserPermissions(userId)
        //
        // const havePermission = !userPermissions[module]?.permissions?.find((permission) => {
        //     return permission?.process?.name === process
        // })?.accessDenied
        //
        // if (!havePermission) {
        //     throw new MethodNotAllowedException('You do not have permission to access this resource')
        // }

        return true;
    }
}
