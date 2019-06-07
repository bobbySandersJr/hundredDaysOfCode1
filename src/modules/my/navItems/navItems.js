import { LightningElement, track } from 'lwc';

export default class NavItem extends LightningElement{
  @track links = [{
    id:1,
    label: 'link1',
    url: '#'
  },{
    id:2,
    label: 'link2',
    url: '#'
  }]
}