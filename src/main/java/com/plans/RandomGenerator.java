package com.plans;

import org.apache.commons.lang3.RandomStringUtils;

public class RandomGenerator {

    public static final int DEFAULT_COUNT = 10;

    public static String generate() {
        return generate(DEFAULT_COUNT);
    }

    public static String generate(int count) {
        return RandomStringUtils.random(count, false, true);
    }
}
