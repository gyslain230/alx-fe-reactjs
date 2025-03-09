import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  it('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    await user.type(input, 'New Todo');
    await user.click(addButton);

    expect(await screen.findByText('New Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('toggles a todo when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    const firstTodo = todoItems[0];

    expect(firstTodo).toHaveStyle('text-decoration: none');

    await user.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: line-through');

    await user.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: none');
  });

  it('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const initialDeleteButtons = screen.getAllByRole('button', { name: 'X' });
    expect(initialDeleteButtons).toHaveLength(2);

    await user.click(initialDeleteButtons[0]);

    const remainingTodos = screen.queryAllByRole('listitem');
    expect(remainingTodos).toHaveLength(1);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  it('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    await user.type(input, '   ');
    await user.click(addButton);

    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(2);
  });
});