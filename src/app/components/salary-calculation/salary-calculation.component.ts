import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-calculation',
  templateUrl: './salary-calculation.component.html',
  styleUrls: ['./salary-calculation.component.css']
})
export class SalaryCalculationComponent {
  grossSalary: number = 0;
  nightShiftHours: number = 0;
  sundayHolidayHours: number = 0;
  sundayNightHours: number = 0;
  insuranceRate: number = 16;
  taxRate: number = 10;
  solidarityRate: number = 2;

  calculatedSalary: any;
  showHint: boolean = false; // Αρχική κατάσταση για το Hint Box

  calculateSalary() {
    const hourRate = this.grossSalary / 25 / 8;  // Ωρομίσθιο (με 25 εργάσιμες μέρες)

    const nightShiftBonus = hourRate * 0.25 * this.nightShiftHours;
    const sundayHolidayBonus = hourRate * 0.75 * this.sundayHolidayHours;
    const sundayNightBonus = (hourRate * 0.25 * 2) + (hourRate * 0.75 * 2);  // Για 2 ώρες Κυριακή βράδυ

    const totalBonuses = nightShiftBonus + sundayHolidayBonus + sundayNightBonus;

    const insurance = this.grossSalary * (this.insuranceRate / 100);
    const tax = this.grossSalary * (this.taxRate / 100);
    const solidarity = this.grossSalary * (this.solidarityRate / 100);

    const netSalary = this.grossSalary - (insurance + tax + solidarity) + totalBonuses;

    this.calculatedSalary = {
      netSalary,
      nightShiftBonus,
      sundayHolidayBonus,
      sundayNightBonus
    };
  }

  toggleHintBox() {
    this.showHint = !this.showHint;
  }
}
