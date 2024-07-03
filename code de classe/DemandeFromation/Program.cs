using System;
using System.Collections.Generic;

namespace DemandeFormation
{
    // Classe Employé
    public class Employe
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Email { get; set; }
        public string Poste { get; set; }

        public List<Demande> Demandes { get; set; } = new List<Demande>();
        public List<Inscription> Inscriptions { get; set; } = new List<Inscription>();
        public List<Evaluation> Evaluations { get; set; } = new List<Evaluation>();

        public void InscrireDemande(Demande demande)
        {
            Demandes.Add(demande);
        }

        public void InscrireCours(Cours cours)
        {
            var inscription = new Inscription { Employe = this, Cours = cours, DateInscription = DateTime.Now, Statut = "En cours" };
            Inscriptions.Add(inscription);
        }
    }

    // Classe Gestionnaire
    public class Gestionnaire
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Email { get; set; }
        public string Departement { get; set; }

        public void ApprouverDemande(Demande demande)
        {
            demande.Statut = "Approuvée";
        }

        public void RejeterDemande(Demande demande)
        {
            demande.Statut = "Rejetée";
        }
    }

    // Classe Agent aux RH
    public class AgentRH
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Email { get; set; }
        public string Service { get; set; }

        public void CreerRapport()
        {
            // Logic for creating report
        }
    }

    // Classe Inscription
    public class Inscription
    {
        public int Id { get; set; }
        public DateTime DateInscription { get; set; }
        public string Statut { get; set; }

        public Employe Employe { get; set; }
        public Cours Cours { get; set; }
    }

    // Classe Demande
    public class Demande
    {
        public int Id { get; set; }
        public DateTime DateSoumission { get; set; }
        public string Statut { get; set; }

        public Employe Employe { get; set; }
        public Gestionnaire Gestionnaire { get; set; }

        public void ValiderDemande()
        {
            Statut = "En attente";
        }

        public void Approuver()
        {
            Statut = "Approuvée";
        }

        public void Rejeter()
        {
            Statut = "Rejetée";
        }

        public void CloreDemande()
        {
            Statut = "Clôturée";
        }
    }

    // Classe Rapport
    public class Rapport
    {
        public int Id { get; set; }
        public DateTime DateCreation { get; set; }

        public AgentRH AgentRH { get; set; }

        public void GenererRapport()
        {
            // Logic for generating report
        }
    }

    // Classe Cours
    public class Cours
    {
        public int Id { get; set; }
        public string Titre { get; set; }
        public string Description { get; set; }
        public DateTime DateDebut { get; set; }
        public DateTime DateFin { get; set; }
        public int Duree { get; set; }

        public List<Inscription> Inscriptions { get; set; } = new List<Inscription>();
        public Formation Formation { get; set; }
        public List<Evaluation> Evaluations { get; set; } = new List<Evaluation>();
    }

    // Classe Formation
    public class Formation
    {
        public int Id { get; set; }
        public string Nom { get; set; }

        public List<Cours> CoursList { get; set; } = new List<Cours>();
    }

    // Classe Évaluation
    public class Evaluation
    {
        public int Id { get; set; }
        public int Note { get; set; }
        public string Commentaires { get; set; }
        public DateTime DateEvaluation { get; set; }

        public Cours Cours { get; set; }
        public Employe Employe { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Exemple de création et utilisation des classes
            Employe employe = new Employe { Id = 1, Nom = "kawther khlif", Email = "kawther.khlif@ABC.ca", Poste = "Développeur" };
            Cours cours = new Cours { Id = 1, Titre = "C# Avancé", Description = "Cours avancé de programmation en C#",
                DateDebut = DateTime.Now, DateFin = DateTime.Now.AddMonths(1), Duree = 30 };
            Demande demande = new Demande { Id = 1, DateSoumission = DateTime.Now, Employe = employe };

            employe.InscrireDemande(demande);
            employe.InscrireCours(cours);

            Gestionnaire gestionnaire = new Gestionnaire { Id = 1, Nom = "Youssef Farehi", Email = "youssef.farehi@ABC.ca",
                Departement = "Informatique" };
            gestionnaire.ApprouverDemande(demande);

            Console.WriteLine($"Demande de {demande.Employe.Nom} pour le cours {cours.Titre} est {demande.Statut}.");
        }
    }
}


