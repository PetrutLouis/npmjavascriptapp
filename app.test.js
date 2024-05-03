// Example function to test
function sum(a, b) {
    return a + b;
}

// Test case
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
