function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\s-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");

  if (new_id.length === 0) new_id = "a";

  if (new_id.length >= 16) new_id = new_id.slice(0, 15).replace(/\.$/, "");

  return new_id.padEnd(3, new_id.slice(-1));
}
