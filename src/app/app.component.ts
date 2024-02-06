// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="calculator">
      <div class="calculator__output">{{ displayValue }}</div>
      <div class="calculator__keys">
        <button class="calculator__key calculator__key--operator" (click)="onOperatorClick('+')">+</button>
        <button class="calculator__key calculator__key--operator" (click)="onOperatorClick('-')">-</button>
        <button class="calculator__key calculator__key--operator" (click)="onOperatorClick('*')">&times;</button>
        <button class="calculator__key calculator__key--operator" (click)="onOperatorClick('/')">&divide;</button>
        <button class="calculator__key" (click)="onNumberClick(7)">7</button>
        <button class="calculator__key" (click)="onNumberClick(8)">8</button>
        <button class="calculator__key" (click)="onNumberClick(9)">9</button>
        <button class="calculator__key" (click)="onNumberClick(4)">4</button>
        <button class="calculator__key" (click)="onNumberClick(5)">5</button>
        <button class="calculator__key" (click)="onNumberClick(6)">6</button>
        <button class="calculator__key" (click)="onNumberClick(1)">1</button>
        <button class="calculator__key" (click)="onNumberClick(2)">2</button>
        <button class="calculator__key" (click)="onNumberClick(3)">3</button>
        <button class="calculator__key" (click)="onNumberClick(0)">0</button>
        <button class="calculator__key" (click)="onDecimalClick()">.</button>
        <button class="calculator__key" (click)="onClearClick()">AC</button>
        <button class="calculator__key calculator__key--enter" (click)="onEqualClick()">=</button>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue: string = '0';
  operator: string | null = null;
  firstOperand: number | null = null;

  onNumberClick(number: number): void {
    if (this.displayValue === '0') {
      this.displayValue = number.toString();
    } else {
      this.displayValue += number;
    }
  }

  onOperatorClick(operator: string): void {
    if (this.operator === null) {
      this.firstOperand = +this.displayValue;
      this.operator = operator;
      this.displayValue = '0';
    }
  }

  onEqualClick(): void {
    if (this.operator && this.firstOperand !== null) {
      const secondOperand = +this.displayValue;
      switch (this.operator) {
        case '+':
          this.displayValue = (this.firstOperand + secondOperand).toString();
          break;
        case '-':
          this.displayValue = (this.firstOperand - secondOperand).toString();
          break;
        case '*':
          this.displayValue = (this.firstOperand * secondOperand).toString();
          break;
        case '/':
          this.displayValue = (this.firstOperand / secondOperand).toString();
          break;
      }
      this.operator = null;
      this.firstOperand = null;
    }
  }

  onClearClick(): void {
    this.displayValue = '0';
    this.operator = null;
    this.firstOperand = null;
  }

  onDecimalClick(): void {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }
}
