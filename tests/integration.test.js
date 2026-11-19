
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('DevOps Application Integration Tests', () => {

    // Test 1: Check homepage navigation link
    test('index.html should link to hello.html', () => {
        const index = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(index).toContain('href="hello.html"');
    });

    // Test 2: Check that the linked page exists
    test('hello.html should exist as the linked destination', () => {
        const hello = path.join(projectDir, 'hello.html');

        expect(fs.existsSync(hello)).toBe(true);
    });

    // Test 3: Check content of the linked page
    test('hello.html should display the Jenkins heading', () => {
        const hello = fs.readFileSync(
            path.join(projectDir, 'hello.html'), 'utf8'
        );

        expect(hello).toContain('Hello World from Jenkins!');
    });

});
