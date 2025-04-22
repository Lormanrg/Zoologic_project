

export function toObject(data: Array<string>) {
  return data.map((value,) => ({
    [value]: value
  }))
}

