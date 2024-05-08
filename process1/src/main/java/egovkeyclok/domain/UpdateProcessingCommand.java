package egovkeyclok.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class UpdateProcessingCommand {

    private String name;
    private Date date;
}
