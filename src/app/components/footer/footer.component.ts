import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerTitles: Array<string> = [
    'Մեր մասին',
    'Աշխատատեղեր',
    'Հաճախորդների կարծիքներ',
    'Օգտագործողի ուղեցույց',
    'Հաճախակի տրվող հարցեր',
    'Օգտագործողի ուղեցույց',
    'Առաքում և վճարում',
    'Կապ',
    'Գնումներ արտերկրից'
  ];
  constructor() {}
  ngOnInit() {}
}
