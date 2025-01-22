"use client";

import React, { useState } from "react";
import Image from "next/image";

const Tos = () => {
  const [activeTab, setActiveTab] = useState("English");

  const renderContent = () => {
    switch (activeTab) {
      case "English":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-3xl font-extralight my-8">Terms of use</h1>
            <h3 className="text-xl font-semibold mb-2">
              1. Ownership of Content
            </h3>
            <p className="mb-4">
              Users retain full ownership of all content and data they share on
              the app.
            </p>
            <p className="mb-4">
              Users have the right to remove their content at any time or report
              stolen personal data or information.
            </p>
            <p>
              The app serves as a platform only and does not assume ownership of
              user content.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              2. Regulation of Content
            </h3>
            <p className="mb-4">
              The app strives to regulate content to ensure a safe and
              trustworthy environment.
            </p>
            <p>
              Users are solely responsible and accountable for the content they
              share on the app.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              3. Use of Personal Data
            </h3>
            <p className="mb-4">
              Users agree to the use of some of their data for advertising
              purposes.
            </p>
            <p className="mb-4">
              The app does not track personal data but may use behavioral data
              to provide personalized item suggestions based on user habits.
            </p>
            <p>
              The app does not share personal data with third parties unless
              required by law.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              4. User Accountability
            </h3>
            <p className="mb-4">
              Users are fully responsible for ensuring that any content they
              share on the app is lawful and does not infringe on the rights of
              others.
            </p>
            <p>
              The app assumes no responsibility for the accuracy or legality of
              user-shared content.
            </p>
          </div>
        );
      case "Français":
        return (
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h1 className="text-3xl font-extralight my-8">
                Conditions générales d&apos;utilisation
              </h1>
              <h3 className="text-xl font-semibold mb-2">
                1. Propriété du Contenu
              </h3>
              <p className="mb-4">
                Les utilisateurs conservent la pleine propriété de tout le
                contenu et les données qu&apos;ils partagent sur
                l&apos;application.
              </p>
              <p className="mb-4">
                Les utilisateurs ont le droit de supprimer leur contenu à tout
                moment ou de signaler un vol de données personnelles.
              </p>
              <p>
                L&apos;application agit uniquement comme une plateforme et ne
                revendique pas la propriété du contenu des utilisateurs.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                2. Régulation du Contenu
              </h3>
              <p className="mb-4">
                L&apos;application s&apos;efforce de réguler le contenu pour
                garantir un environnement sûr et fiable.
              </p>
              <p>
                Les utilisateurs sont seuls responsables et imputables du
                contenu qu&apos;ils partagent sur l&apos;application.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                3. Utilisation des Données Personnelles
              </h3>
              <p className="mb-4">
                Les utilisateurs acceptent que certaines de leurs données soient
                utilisées à des fins publicitaires.
              </p>
              <p className="mb-4">
                L&apos;application ne suit pas les données personnelles, mais
                peut utiliser des données comportementales pour proposer des
                suggestions personnalisées basées sur les habitudes des
                utilisateurs.
              </p>
              <p>
                L&apos;application ne partage pas les données personnelles avec
                des tiers sauf en cas d&apos;obligation légale.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                4. Responsabilité des Utilisateurs
              </h3>
              <p className="mb-4">
                Les utilisateurs sont entièrement responsables de s&apos;assurer
                que tout contenu qu&apos;ils partagent sur l&apos;application
                est licite et ne viole pas les droits des autres.
              </p>
              <p>
                L&apos;application décline toute responsabilité quant à
                l&apos;exactitude ou la légalité du contenu partagé par les
                utilisateurs.
              </p>
            </div>
          </div>
        );
      case "Malagasy":
        return (
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h1 className="text-3xl font-extralight my-8">
                Fepetra ankapobeny amin&apos;ny fampiasana
              </h1>
              <h3 className="text-xl font-semibold mb-2">
                1. Fananana ny Votoaty
              </h3>
              <p className="mb-4">
                Ny mpampiasa dia mitazona tanteraka ny fananan&apos;izy ireo
                rehetra sy ny angona zarainy ao amin&apos;ny fampiharana.
              </p>
              <p className="mb-4">
                Manan-jo hanaisotra ny votoatiny amin&apos;ny fotoana rehetra na
                mitatitra angon-drakitra very na nangalarina ny mpampiasa.
              </p>
              <p>
                Ny fampiharana dia sehatra fotsiny ary tsy manao an&apos;izay
                votoaty ampiasain&apos;ny mpampiasa ho fananany.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                2. Fanaraha-maso ny Votoaty
              </h3>
              <p className="mb-4">
                Ny fampiharana dia miezaka mifehy ny votoaty mba hiantohana
                tontolo azo antoka sy atokisana.
              </p>
              <p>
                Ny mpampiasa dia tompon&apos;andraikitra feno sy azo itokisana
                amin&apos;ny votoaty zarainy ao amin&apos;ny fampiharana.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                3. Fampiasana ny Angon-drakitra Manokana
              </h3>
              <p className="mb-4">
                Ny mpampiasa dia manaiky ny hampiasaina ny angon-drakitra sasany
                ho an&apos;ny dokambarotra.
              </p>
              <p className="mb-4">
                Ny fampiharana dia tsy manara-maso angon-drakitra manokana fa
                mety hampiasa angon-drakitra mikasika ny fitondrantena mba
                hanolorana soso-kevitra manokana mifanaraka amin&apos;ny
                fahazarana ampiasain&apos;ny mpampiasa.
              </p>
              <p>
                Ny fampiharana dia tsy mizara angon-drakitra manokana
                amin&apos;ny antoko fahatelo raha tsy hoe noho ny antony
                ara-dalàna.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                4. Andraikitry ny Mpampiasa
              </h3>
              <p className="mb-4">
                Ny mpampiasa dia tompon&apos;andraikitra feno amin&apos;ny
                fanamarinana fa ara-dalàna ny votoaty zarainy ary tsy mandika ny
                zon&apos;ny hafa.
              </p>
              <p>
                Ny fampiharana dia tsy tompon&apos;andraikitra amin&apos;ny
                fahamarinan&apos;ny na ny ara-dalàna ny votoaty zarain&apos;ny
                mpampiasa.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Image
        src="/trans_bg.png"
        alt="Logo Ahofa App"
        width={250}
        height={250}
        unoptimized={true} // Disable Next.js image optimization
        className="self-center mx-auto my-6"
      />
      <div
        role="tablist"
        className="tabs tabs-boxed lg:max-w-[50vw] lg:mx-auto my-4"
      >
        {["English", "Français", "Malagasy"].map((language) => (
          <a
            key={language}
            role="tab"
            className={`tab ${activeTab === language ? "tab-active" : ""}`}
            onClick={() => setActiveTab(language)}
          >
            <div className="flex items-center mb-4 justify-center">
              <Image
                src={
                  language === "English"
                    ? "https://flagcdn.com/us.svg"
                    : language === "Français"
                    ? "https://flagcdn.com/fr.svg"
                    : "https://flagcdn.com/mg.svg"
                }
                alt={`${language} Flag`}
                width={30}
                height={26}
                className="mr-2"
              />
              <h2
                className={`text-lg font-light hidden md:block ${
                  activeTab === language ? "text-white" : ""
                }`}
              >
                {language}
              </h2>
            </div>
          </a>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default Tos;
