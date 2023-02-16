import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { ProduitService } from './produit.service';
import { FormBuilder , FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[] | undefined;
  produitForm :FormGroup
  operation: String = 'add'

  constructor( private produitService: ProduitService,private fb: FormBuilder) {
                this.produitForm = this.fb.group({
                  ref:['' , Validators.required],
                  quantite:['' , Validators.required],
                  prixUnitaire:['' , Validators.required]
                })

                }

  ngOnInit(): void {
    this.loadProduits();
  }
    loadProduits(){
      this.produitService.getProduits().subscribe(
        data => {this.produits = data},
        error => {console.log('an error was occured')},
        () => {console.log('loading products was donne')}

      );
    }
    addProduit(){
      const p = this.produitForm.value;
        this.produitService.addProduit(p).subscribe(
          res => {this.loadProduits}
        );
    }
}
