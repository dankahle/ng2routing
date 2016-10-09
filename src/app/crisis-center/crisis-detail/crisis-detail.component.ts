import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {Crisis} from '../crisis';
import { DialogService }  from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  providers: [DialogService]
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName: string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public dialogService: DialogService) {}

  ngOnInit() {
    this.route.data.forEach((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId}], { relativeTo: this.route });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

}
