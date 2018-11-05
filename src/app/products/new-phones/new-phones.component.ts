import {Component, OnInit} from '@angular/core';
import {Portable} from '../../models/manage-stocks/portable.model';
import {Product} from '../../models/manage-stocks/product.model';
import {ProductCategory} from '../../models/manage-stocks/product-category.model';
import {MeasureUnit} from '../../models/manage-stocks/measure-unit.model';
import {State} from '../../models/manage-stocks/state.model';
import {Emplacement} from '../../models/manage-stocks/emplacement.model';
import {SystemOs} from '../../models/manage-stocks/system-os.model';
import {Camera} from '../../models/manage-stocks/camera.model';
import {Memory} from '../../models/manage-stocks/memory.model';
import {PortableCategory} from '../../models/manage-stocks/portable-category.model';
import {Cpu} from '../../models/manage-stocks/cpu.model';
import {PortableServices} from '../../services/portable.services';
import {EntrepotServices} from '../../services/entrepot.services';
import {ProductServices} from '../../services/product.services';
import {Entrepot} from '../../models/manage-stocks/entrepot.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-phones',
  templateUrl: './new-phones.component.html',
  styleUrls: ['./new-phones.component.scss']
})
export class NewPhonesComponent implements OnInit {
  portable: Portable = new Portable();
  listProductCategory: Array<ProductCategory>;
  listMeasureUnit: Array<MeasureUnit>;
  listState: Array<State>;
  listEmplacement: Array<Emplacement>;
  listSystemOs: Array<SystemOs>;
  listCamera: Array<Camera>;
  listMemory: Array<Memory>;
  listPortableCategory: Array<PortableCategory>;
  listCpu: Array<Cpu>;
  constructor(public portableServices: PortableServices, public entrepotService: EntrepotServices,
              public productServices: ProductServices, public router: Router) {

  }
  ngOnInit() {
    this.portable = new Portable();
    this.portableServices.listAllcatPorta()
      .subscribe(data => {
        this.listPortableCategory = data.json();
        console.log(this.listPortableCategory);
      },
        err => {
        console.log(err);
        });
    this.portableServices.listAllMeasureUnit()
      .subscribe(data => {
        this.listMeasureUnit = data.json();
        console.log(this.listMeasureUnit);
      },
        err => {
        console.log(err);
        }
        );
    this.portableServices.listAllCamera()
      .subscribe(data => {
        this.listCamera = data.json();
        console.log(this.listCamera);
      },
        err => {
        console.log(err);
        }
        );
     this.portableServices.listAllSystemOs()
      .subscribe(data => {
        this.listSystemOs = data.json();
        console.log(this.listSystemOs);
      },
        err => {
        console.log(err);
        }
        );
     this.entrepotService.listEmplOfAllEntr()
      .subscribe(data => {
        this.listEmplacement = data.json();
        console.log(this.listEmplacement);
      },
        err => {
        console.log(err);
        }
        );
      this.productServices.listAllState()
      .subscribe(data => {
        this.listState = data.json();
        console.log(this.listState);
      },
        err => {
        console.log(err);
        }
        );
      this.portableServices.listAllCpu()
      .subscribe(data => {
        this.listCpu = data.json();
        console.log(this.listCpu);
      },
        err => {
        console.log(err);
        }
        );
      this.portableServices.listAllMemory()
      .subscribe(data => {
        this.listMemory = data.json();
        console.log(this.listMemory);
      },
        err => {
        console.log(err);
        }
        );
  }
  savePortable() {
    console.log(this.portable);
    this.portableServices.savePortable(this.portable)
      .subscribe(data => {
        this.portable = data.json();
      },
        err => {
        console.log(err);
        });
  }
}
