// import { element } from 'protractor/built';
// import { AfterViewInit, Component, ElementRef, Inject, OnChanges, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { User } from '../user.model';
// import {DatePipe} from '@angular/common';
// import { Ng2FileDropModule, Ng2FileDropAcceptedFile } from 'ng2-file-drop';
// import { MdDialog } from '@angular/material';
// import { CropperDialogComponent } from '../../shared/image-cropper-dialog/image-cropper-dialog.component';
//
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/map';
// // Email Pattern Checking
// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//
// @Component({
//     selector: 'app-users-user',
//     templateUrl: './user.component.html',
//     styleUrls: ['./user.component.scss']
// })
//
// export class UserComponent implements OnInit {
//     // instantiate datepipe
//     private dp = new DatePipe(navigator.language);
//     private p = 'y-MM-dd';
//     // property for profile image
//     userImage: any;
//     user: User;
//     userAddForm: FormGroup;
//     // for auto text box
//     filteredGroups: any;
//     otherTabsVisibility = false;
//     groups = [
//         'First',
//         'Second',
//         'Third',
//         'Fourth',
//         'Fifth',
//         'Sixth',
//         'Seven',
//         'Eighth'
//     ];
//     roles = ['teacher ', 'student', 'manager', 'director'];
//     statuses = [];
//
//     constructor
//     (
//         private route: ActivatedRoute,
//         private formBuilder: FormBuilder,
//         private dialog: MdDialog,
//     ) {}
//     ngOnInit() {
//         // initializing the form
//         this.userImage = 'assets/images/upload-image.svg';
//         this.userAddForm = this.formBuilder.group({
//             'firstName' : ['', Validators.required],
//             'surname': ['', Validators.required],
//             'email': ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
//             'mobilephone': ['', Validators.required , Validators.maxLength(10)],
//             'username': ['', Validators.required],
//             'password': ['', [Validators.required, Validators.minLength(6)]],
//             'role': [null, Validators.required],
//             'reportingTo': [null, Validators.required],
//             'language': [''],
//             'workPhone': [''],
//             'addressLine1': [''],
//             'addressLine2': [''],
//             'city': [''],
//             'county': [''],
//             'country': [''],
//             'postcode': [''],
//             'timezone': [''],
//             'jobTitle': [''],
//             'companyName': [''],
//             'skype': [''],
//             'twitter': [''],
//             'website': [''],
//
//         });
//
//         // check for form validity by using valueChanges property using filter opertaor
//         // and enable/disable tabs when form becomes valid or not
//         this.userAddForm.valueChanges
//             .subscribe( data => {
//                 if (this.userAddForm.valid) {
//                     this.otherTabsVisibility = true;
//                 } else {
//                     this.otherTabsVisibility = false;
//                 }
//             });
//
//         // for autocomplete textbox
//         // this.filteredGroups = this.userAddForm.get('group').valueChanges
//         //     .startWith(null)
//         //     .map((name) => this.filterGroups(name));
//
//         // this.statuses = [
//         //     { id: 0, name: 'Disabled' },
//         //     { id: 1, name: 'Enabled' }
//         // ];
//
//         // check whether the form should be in add mode or edit mode
//         // by checking whether the user data is injected by the userResolve
//         if (this.route.snapshot.data['user']) {
//             // we will be setting in the user property later
//             // since we don't have data in our json which is equivalent to the User type defined
//             // we will be directly using snapshot data as of now
//             // this.user = this.route.snapshot.data['user'];
//             const dtr = this.dp.transform(new Date(), this.p);
//             // set the values for each form control
//             this.userAddForm.patchValue({
//                 'firstName': this.route.snapshot.data['user']['firstName'],
//                 'surname': this.route.snapshot.data['user']['surname'],
//                 'email': this.route.snapshot.data['user']['email'],
//                 'mobilephone': this.route.snapshot.data['user']['mobilephone'],
//                 'username': this.route.snapshot.data['user']['userName'],
//                 'contactNumber': this.route.snapshot.data['user']['phone'],
//                 'password': this.route.snapshot.data['user']['password'],
//                 'role': this.route.snapshot.data['user']['role'],
//                 'reportingTo': this.route.snapshot.data['user']['reportingTo'],
//                 'language': this.route.snapshot.data['user']['language'],
//                 'workPhone': this.route.snapshot.data['user']['workPhone'],
//                 'addressLine1': this.route.snapshot.data['user']['addressLine1'],
//                 'addressLine2': this.route.snapshot.data['user']['addressLine2'],
//                 'city': this.route.snapshot.data['user']['city'],
//                 'county': this.route.snapshot.data['user']['county'],
//                 'country': this.route.snapshot.data['user']['country'],
//                 'postcode': this.route.snapshot.data['user']['postcode'],
//                 'timezone': this.route.snapshot.data['user']['timezone'],
//                 'jobTitle': this.route.snapshot.data['user']['jobTitle'],
//                 'companyName': this.route.snapshot.data['user']['companyName'],
//                 'skype': this.route.snapshot.data['user']['skype'],
//                 'twitter': this.route.snapshot.data['user']['twitter'],
//                 'website': this.route.snapshot.data['user']['website']
//             });
//         }
//
//     } // end of ngOnInit
//
//     filterGroups(val: string) {
//         return val ? this.groups.filter((g) => g.toLowerCase().indexOf(val.toLowerCase()) === 0)
//             : this.groups;
//     }
//
//     openDialog(imageData: any): void {
//         // while opening the dialog , the data is passed to the dialog
//         // here, the image file which gets dragged and dropped is passed
//         // this open will create an instance of MdDialogRef
//         // which provides handle on the opened dialog
//         const dialogRef = this.dialog.open( CropperDialogComponent, {
//             data: {
//                 file: imageData
//             }
//         });
//         // when the dialog is closed, we are subscribing to the result
//         // which is passed from Modal
//         // here , the cropped imaged is being passed from the dialog.
//         dialogRef.afterClosed().subscribe((result) => {
//             if (result) {
//                 this.userImage = result;
//             }
//         });
//       }
//
//     // function to read the file using file reader api\
//     fileReaderFunction(file) {
//          // Load the image in
//          const fileReader = new FileReader();
//          const image: any = new Image();
//          const that = this;
//          fileReader.onload = () => {
//              image.src = fileReader.result;
//              // pass this image as the argument to the dialog
//              this.openDialog(image);
//          };
//          // Read in the file
//          fileReader.readAsDataURL(file);
//     }
//     // this function is used to set the value of input type file to empty
//     // this is done coz when a user first drag and drop an image
//     // and then click on the uload icon and choose the image
//     // then the dialog will not open , as the change event is not triggered
//     // so , we explicitly set the value of the input file type to empty on each click.
//     setEmptyFileValue(fileInput) {
//         fileInput.value = null;
//     }
//
//     // this function gets called when the file is dropped and accepted
//     dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
//         this.fileReaderFunction(acceptedFile.file);
//     }
//     // this function gets called when file input is changed on image upload icon click.
//     onUploadFileChange(changeFileEvent) {
//         this.fileReaderFunction(changeFileEvent.srcElement.files[0]);
//     }
//
//     onUserAddFormBtnClick(tabGrpElement) {
//         // change tabs based on selected index of the local reference tabGrpElement
//         console.log(tabGrpElement);
//         tabGrpElement.selectedIndex = tabGrpElement.selectedIndex + 1;
//     }
//
//     onChangingTab(saveBtn, tabElement) {
//         // on changing tab , change button text
//         // two ways to change tab , 1. by clicking button 2. By selecting specific tab
//         // both the ways are covered here
//         // selectedTab property is checked for first way
//         // tabChangeEvent is used for second way
//         if (tabElement.index === 2) {
//             saveBtn._elementRef.nativeElement.innerText = 'Save';
//         } else {
//             saveBtn._elementRef.nativeElement.innerText = 'Save & Continue';
//         }
//     }
//
// }
//
