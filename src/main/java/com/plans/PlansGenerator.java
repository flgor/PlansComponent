package com.plans;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class PlansGenerator {

    private final Random random = new Random();
    private final int size;

    public PlansGenerator(int size) {
        this.size = size;
    }

    public List<PlanData> generate() {
        return IntStream.range(0, size)
                .mapToObj(iterator -> autogenerate(iterator))
                .collect(Collectors.toList());
    }

    private PlanData autogenerate(int i) {
        PlanData planData = new PlanData();

        planData.setName("plan" + RandomGenerator.generate() + "[" + i + "]");
        planData.setBillingCycle(1);
        planData.setBillingCycle(autogenerateBillingCycle());
        planData.setEnabled(random.nextBoolean());
        planData.setPrice((double)random.nextInt(50));

        return planData;
    }

    private Integer autogenerateBillingCycle() {
        boolean isYearlyBillingCycle = random.nextBoolean();

        if (isYearlyBillingCycle) {
            return 12;
        }
        return 1;
    }
}
