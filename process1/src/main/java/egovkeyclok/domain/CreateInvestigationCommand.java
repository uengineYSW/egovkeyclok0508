package egovkeyclok.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class CreateInvestigationCommand {

    private String name;
    private String description;
    private Date date;
}
