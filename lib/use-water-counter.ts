"use client";

import { useState, useEffect, useRef } from "react";

export type Unit = "liters" | "gallons";

interface UseWaterCounterReturn {
    count: number;
    unit: Unit;
    setUnit: (unit: Unit) => void;
    formattedCount: string;
}

// Constants
const YEAR_START_BASE = 50_000_000_000; // 50 billion liters at year start
const INCREMENT_PER_SECOND = 3500; // Liters per second (realistic global AI compute)
const YEAR_START_DATE = new Date("2026-01-01T00:00:00Z");

/**
 * Custom hook to simulate global AI water consumption counter
 * Calculates consumption based on time elapsed since year start
 */
export function useWaterCounter(): UseWaterCounterReturn {
    const [unit, setUnit] = useState<Unit>("liters");
    const [count, setCount] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        // Calculate initial count based on time since year start
        const now = Date.now();
        const yearStart = YEAR_START_DATE.getTime();
        const secondsElapsed = Math.max(0, (now - yearStart) / 1000);
        const initialCount = YEAR_START_BASE + secondsElapsed * INCREMENT_PER_SECOND;

        setCount(initialCount);

        // Update counter every 100ms for visible ticking
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + (INCREMENT_PER_SECOND * 0.1)); // 0.1 seconds = 100ms
        }, 100);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Format the count based on selected unit
    const displayValue = unit === "gallons" ? count * 0.264172 : count;
    const formattedCount = formatNumber(displayValue);

    return {
        count,
        unit,
        setUnit,
        formattedCount,
    };
}

function formatNumber(num: number): string {
    return new Intl.NumberFormat("en-US").format(Math.floor(num));
}
