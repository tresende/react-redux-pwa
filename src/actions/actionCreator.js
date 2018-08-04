export function count(size) {
    return { type: 'ADD', size: size };
}

export function remove(size) {
    return { type: 'REMOVE', size: size };
}