import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }

  // Λογική υπολογισμού μισθού
  calculateSalary(grossSalary: number, nightHours: number) {
    // Ποσοστά (προσαρμόστε τα σύμφωνα με τις ισχύουσες νομοθεσίες)
    const taxRate = 0.15;  // 15% φόρος
    const insuranceRate = 0.20;  // 20% ασφαλιστικές εισφορές
    const nightShiftBonusRate = 0.10;  // 10% προσαύξηση για νυχτερινή εργασία

    // Υπολογισμοί
    const deductions = grossSalary * (taxRate + insuranceRate);  // Κρατήσεις
    const nightBonus = nightHours * 5;  // Κάθε νυχτερινή ώρα αξίζει 5€ (π.χ.)
    const netSalary = grossSalary - deductions + nightBonus;  // Καθαρός μισθός

    // Επιστροφή αποτελεσμάτων 
    return {
      netSalary,
      deductions,
      nightBonus
    };
  }
}
