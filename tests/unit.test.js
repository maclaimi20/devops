
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('DevOps Application Unit Tests', () => {

    // Test 1: Check index.html exists
    test('index.html should exist', () => {
        expect(
            fs.existsSync(path.join(projectDir, 'index.html'))
        ).toBe(true);
    });

    // Test 2: Check hello.html exists
    test('hello.html should exist', () => {
        expect(
            fs.existsSync(path.join(projectDir, 'hello.html'))
        ).toBe(true);
    });

    // Test 3: Check homepage heading
    test('index.html should contain Welcome to DevOps!', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(content).toContain('Hello World from DevOps!');
    });

    // Test 4: Check feature branch content
    test('index.html should contain Feature Branch Development', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(content).toContain('Feature Branch Development');
        expect(content).toContain('feature-homepage');
    });

    // Test 5: Check hello.html heading
    test('hello.html should contain Hello World from Jenkins!', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'hello.html'), 'utf8'
        );

        expect(content).toContain('Hello World from Jenkins!');
    });

});
