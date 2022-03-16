import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const PRODUIT_INSERT_FORM = {
    'marque': ['', [Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
    'modele': [undefined, [Validators.minLength(1), Validators.maxLength(30)]],
    'prix': [0, [Validators.required, Validators.min(0), isMultiple(3)]],
    'stock': [1, [Validators.min(1), Validators.max(99), pair]],
    'en_vente': [true]
}

function pair(control: AbstractControl) : ValidationErrors | null {
    if(!control.value || control.value % 2 == 0)
        return null;
    
    return {
        pair:{
            'message' : 'devrait être pair'
        }
    }
}

export function prixDoubleStock(control: AbstractControl): ValidationErrors | null{
    const prix = control.value.prix;
    const stock = control.value.stock;

    if(prix >= 2*stock)
        return null;

    return {
        prixDoubleStock:{
            prix: prix,
            stock: stock,
            message: 'le prix devrait être le double du stock'
        }
    }
}

export function sameFirst2Letters(control: AbstractControl): ValidationErrors | null{
    const modele: string = control.value.modele;
    const marque: string = control.value.marque;
    
    if(!modele || modele.startsWith(marque.substring(0,2)))
        return null;

        return {
            sameFirst2Letters:{
                modele: modele,
                marque: marque,
                message: 'Le modele doit commencé par les 2 premières lettres de la marque'
            }
        }
}

function isMultiple(multiple: number): ValidatorFn{
    return (control: AbstractControl): ValidationErrors  | null => {
        const number: number = control.value;

        if(number % multiple == 0)
           return null;
        
        return {
            isMultiple:{
                message: 'Le nombre ' + number + ' doit être un multiple de ' + multiple
            }
        }
    };
}

