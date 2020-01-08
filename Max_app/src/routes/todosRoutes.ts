import { getTodos, createTodo, updateTodo, deleteTodo } from './../controlers/todosControlers';
import { Router } from 'express';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;


