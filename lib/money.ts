const MoneyHelpers = {
  format(value: number) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  },
};

export { MoneyHelpers };
