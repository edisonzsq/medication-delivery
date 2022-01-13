// Set new expiration time of 10s
export function getNewExpirationTime() {
    return Date.now() + 10 * 1000;
}

// Generate new id
let nextId = 0;
export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
}