package com.thebytecloud.springwithangular.domain;


import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class Todo {

    private Long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

}
