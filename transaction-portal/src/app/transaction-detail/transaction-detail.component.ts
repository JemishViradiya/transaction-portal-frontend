import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css',
})
export class TransactionDetailComponent {
  transaction: Transaction | undefined;
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.getTransaction(id).subscribe((transaction) => {
      this.transaction = transaction;
    });
  }

  save(): void {
    if (this.transaction) {
      this.transactionService
        .updateTransaction(this.transaction)
        .subscribe(() => {
          this.router.navigate(['/transaction-list']);
        });
    }
  }
}
