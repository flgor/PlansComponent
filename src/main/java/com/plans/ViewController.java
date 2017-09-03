package com.plans;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/planComponent")
    public String getPlanComponentView(Model model) {
        model.addAttribute("message", "Hello Plans!");
        return "planComponent";
    }
}
