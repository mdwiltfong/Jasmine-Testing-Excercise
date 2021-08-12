describe(`Calculating monthly rate`,()=>{
  const values={
    amount:5000,
    years:10,
    rate:123
  }
  it("calculateMonthlyPayment function",()=>{
    expect(calculateMonthlyPayment(values)).toBe('615000.00')
  })
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment(values)).toBe('615000.00')
  });






})

/// etc
