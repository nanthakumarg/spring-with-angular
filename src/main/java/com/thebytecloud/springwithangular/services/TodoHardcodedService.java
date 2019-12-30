package com.thebytecloud.springwithangular.services;

import com.thebytecloud.springwithangular.domain.Todo;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>(10);
    private static Long idCounter = 0l;

    static {
        todos.add(Todo.builder()
                .id(++idCounter)
                .username("user1")
                .description("Learn to Dance")
                .targetDate(new Date())
                .isDone(false)
                .build()
        );

        todos.add(Todo.builder()
                .id(++idCounter)
                .username("user1")
                .description("Learn about Microservices")
                .targetDate(new Date())
                .isDone(false)
                .build()
        );

        todos.add(Todo.builder()
                .id(++idCounter)
                .username("user1")
                .description("Learn about Angular")
                .targetDate(new Date())
                .isDone(false)
                .build()
        );

        todos.add(Todo.builder()
                .id(++idCounter)
                .username("user1")
                .description("Learn about ReactJs")
                .targetDate(new Date())
                .isDone(false)
                .build()
        );
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo) {
        if( todo.getId() == -1 || todo.getId() == 0 ) {
            todo.setId(++idCounter);
            todos.add(todo);
        }else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(Long id) {
        Todo todo = findById(id);
        if(todo == null)
            return null;
        if(todos.remove(todo))
            return todo;

        return null;
    }

    public Todo findById(Long id) {

        for(Todo todo: todos) {
            if(todo.getId() == id) {
                return todo;
            }
        }

        return null;
    }
}
