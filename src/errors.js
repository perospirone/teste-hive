export default function returnOfErrors(code) {
  switch (code) {
    case "23505":
      return { error: "duplicate nickname" }
    default:
      return { error: "unexpected error" }
  }
}
