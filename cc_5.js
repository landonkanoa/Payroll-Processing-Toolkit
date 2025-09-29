//Step 2 //
const employees = [
  {
    name: "Frankie Fisher",
    hourlyRate: 22,
    hoursWorked: 40
  },
  {
    name: "Leslie Bell",
    hourlyRate: 19,
    hoursWorked: 35
  },
  {
    name: "Ashley Hawkins",
    hourlyRate: 32,
    hoursWorked: 42
  },
  {
    name: "Michael Soler",
    hourlyRate: 28,
    hoursWorked: 50
  }
];

//Step 3//
function calculateBasePay(rate, hours) {
  const maxRegularHours = 40;
  const regularHours = Math.min(hours, maxRegularHours);
  return rate * regularHours;
}

//Step 4//
function calculateOvertimePay(rate, hours) {
  const maxRegularHours = 40;
  if (hours <= maxRegularHours) {
    return 0;
  }
  const overtimeHours = hours - maxRegularHours;
  const overtimeRate = rate * 1.5;
  return overtimeRate * overtimeHours;
}

//Step 5//
function calculateTaxes(grossPay) {
  const taxRate = .15;
  return grossPay * taxRate;
}

//Step 6//
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;
  
  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}

//Step 7//
for (let i = 0; i < employees.length; i++) {
  console.log(processPayroll(employees[i]));
}