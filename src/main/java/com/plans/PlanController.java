package com.plans;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PlanController {

    @GetMapping("/plans")
    public @ResponseBody List<PlanData> getPlans() {
        return new PlansGenerator(15).generate();
    }
}
