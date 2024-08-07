import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const FormulaireDemande = () => {
    const [formData, setFormData] = useState({
        employe: '',
        gestionnaire: '',
        fournisseur: '',
        codeCours: '',
        titreCours: '',
        dateLimite: '',
        categorie: '',
        modalite: '',
        langue: '',
        duree: '',
        frais: '',
        dateDebut: ''
    });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numberRegex = /^[0-9]+$/;

        tempErrors.employe = formData.employe ? "" : "Ce champ est requis.";
        tempErrors.gestionnaire = formData.gestionnaire ? "" : "Ce champ est requis.";
        tempErrors.fournisseur = formData.fournisseur ? "" : "Ce champ est requis.";
        tempErrors.codeCours = formData.codeCours ? "" : "Ce champ est requis.";
        tempErrors.titreCours = formData.titreCours ? "" : "Ce champ est requis.";
        tempErrors.dateLimite = formData.dateLimite ? "" : "Ce champ est requis.";
        tempErrors.categorie = formData.categorie ? "" : "Ce champ est requis.";
        tempErrors.modalite = formData.modalite ? "" : "Ce champ est requis.";
        tempErrors.langue = formData.langue ? "" : "Ce champ est requis.";
        tempErrors.duree = numberRegex.test(formData.duree) ? "" : "Veuillez entrer un nombre valide.";
        tempErrors.frais = numberRegex.test(formData.frais) ? "" : "Veuillez entrer un nombre valide.";
        tempErrors.dateDebut = formData.dateDebut ? "" : "Ce champ est requis.";

        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="form-group">
                    <label>Nom de l'employé :</label>
                    <select name="employe" value={formData.employe} onChange={handleChange} className="form-control is-invalid">
                        <option value="">Sélectionner...</option>
                        <option value="employe1">Employé 1</option>
                        <option value="employe2">Employé 2</option>
                    </select>
                    {errors.employe && <div className="invalid-feedback">{errors.employe}</div>}
                </div>

                <div className="form-group">
                    <label>Nom du gestionnaire :</label>
                    <select name="gestionnaire" value={formData.gestionnaire} onChange={handleChange} className="form-control is-invalid">
                        <option value="">Sélectionner...</option>
                        <option value="gestionnaire1">Chantal Bergevin</option>
                    </select>
                    {errors.gestionnaire && <div className="invalid-feedback">{errors.gestionnaire}</div>}
                </div>

                <div className="form-group">
                    <label>Fournisseur tierce partie :</label>
                    <input type="text" name="fournisseur" value={formData.fournisseur} onChange={handleChange} className="form-control is-invalid" />
                    {errors.fournisseur && <div className="invalid-feedback">{errors.fournisseur}</div>}
                </div>

                <div className="form-group">
                    <label>Code du cours :</label>
                    <input type="text" name="codeCours" value={formData.codeCours} onChange={handleChange} className="form-control is-invalid" />
                    {errors.codeCours && <div className="invalid-feedback">{errors.codeCours}</div>}
                </div>

                <div className="form-group">
                    <label>Titre du cours :</label>
                    <input type="text" name="titreCours" value={formData.titreCours} onChange={handleChange} className="form-control is-invalid" />
                    {errors.titreCours && <div className="invalid-feedback">{errors.titreCours}</div>}
                </div>

                <div className="form-group">
                    <label>Date limite d'inscription :</label>
                    <input type="date" name="dateLimite" value={formData.dateLimite} onChange={handleChange} className="form-control is-invalid" />
                    {errors.dateLimite && <div className="invalid-feedback">{errors.dateLimite}</div>}
                </div>

                <div className="form-group">
                    <label>Catégorie :</label>
                    <select name="categorie" value={formData.categorie} onChange={handleChange} className="form-control is-invalid">
                        <option value="">Sélectionner...</option>
                        <option value="gestion de projet">gestion de projet</option>
                        <option value="informatique">informatique</option>
                        <option value="gestion des ressources humaines">gestion des ressources humaines</option>
                    </select>
                    {errors.categorie && <div className="invalid-feedback">{errors.categorie}</div>}
                </div>

                <div className="form-group">
                    <label>Modalité pédagogique :</label>
                    <select name="modalite" value={formData.modalite} onChange={handleChange} className="form-control is-invalid">
                        <option value="">Sélectionner...</option>
                        <option value="en personne">en personne</option>
                        <option value="en salle de classe virtuelle">en salle de classe virtuelle</option>
                        <option value="apprentissage virtuel à son rythme">apprentissage virtuel à son rythme</option>
                    </select>
                    {errors.modalite && <div className="invalid-feedback">{errors.modalite}</div>}
                </div>

                <div className="form-group">
                    <label>Langue du cours :</label>
                    <select name="langue" value={formData.langue} onChange={handleChange} className="form-control is-invalid">
                        <option value="">Sélectionner...</option>
                        <option value="anglais">anglais</option>
                        <option value="français">français</option>
                    </select>
                    {errors.langue && <div className="invalid-feedback">{errors.langue}</div>}
                </div>

                <div className="form-group">
                    <label>Durée du cours (en heures) :</label>
                    <input type="text" name="duree" value={formData.duree} onChange={handleChange} className="form-control is-invalid" />
                    {errors.duree && <div className="invalid-feedback">{errors.duree}</div>}
                </div>

                <div className="form-group">
                    <label>Frais du cours (CAD) :</label>
                    <input type="text" name="frais" value={formData.frais} onChange={handleChange} className="form-control is-invalid" />
                    {errors.frais && <div className="invalid-feedback">{errors.frais}</div>}
                </div>

                <div className="form-group">
                    <label>Date de début du cours :</label>
                    <input type="date" name="dateDebut" value={formData.dateDebut} onChange={handleChange} className="form-control is-invalid" />
                    {errors.dateDebut && <div className="invalid-feedback">{errors.dateDebut}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Soumettre</button>
                <button type="reset" className="btn btn-secondary">Annuler</button>
            </form>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Votre demande de formation a été soumise avec succès.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FormulaireDemande;
