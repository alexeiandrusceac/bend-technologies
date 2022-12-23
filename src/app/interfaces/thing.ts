export interface Thing {
  id: number,
  areaId: number,
  joinedWith: number | null,
  sku: string,
  defaultSku: string,
  status: "open",
  countActive: number
}
