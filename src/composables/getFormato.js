export const useFormatter = () => {

    const formatter = (input) => {
        return input
        .split("-")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    }

    return {
        formatter
    }
}