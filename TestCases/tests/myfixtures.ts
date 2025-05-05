import { TodoPage } from './todo.service.ts';
import { test as base } from '@playwright/test';

type MyFixture = {
    todoPage: TodoPage;
};

export const test = base.extend<MyFixture>({
    todoPage: async ({ page }, use) => {
        const todoPage = new TodoPage(page);
        await use(todoPage);
    },
});

export { expect } from '@playwright/test';
