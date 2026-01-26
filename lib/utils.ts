import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format a number with commas for thousands separator
 */
export function formatNumber(num: number): string {
    return new Intl.NumberFormat("en-US").format(Math.floor(num));
}

/**
 * Convert liters to gallons
 */
export function litersToGallons(liters: number): number {
    return liters * 0.264172;
}

/**
 * Convert gallons to liters
 */
export function gallonsToLiters(gallons: number): number {
    return gallons / 0.264172;
}

/**
 * Format large numbers with abbreviations (K, M, B, T)
 */
export function formatLargeNumber(num: number): string {
    if (num >= 1e12) return (num / 1e12).toFixed(1) + "T";
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
}
