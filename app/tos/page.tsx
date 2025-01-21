import React from "react";
// pages/content-policy.js
import Image from "next/image";

const Tos = () => {
  return (
    <div className="container mx-auto p-6">
      {/* English Version */}
      <div className="mb-12">
        <Image
          src="/trans_bg.png"
          alt="Logo Ahofa App"
          width={250}
          height={250}
          className="self-center mx-auto my-6"
        />
        <div className="flex items-center mb-4">
          <Image
            src="https://flagcdn.com/us.svg"
            alt="USA Flag"
            width={24}
            height={24}
            className="w-6 h-6 mr-2"
          />
          <h2 className="text-2xl font-semibold">English</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
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
            The app strives to regulate content to ensure a safe and trustworthy
            environment.
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
            The app does not track personal data but may use behavioral data to
            provide personalized item suggestions based on user habits.
          </p>
          <p>
            The app does not share personal data with third parties unless
            required by law.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            4. User Accountability
          </h3>
          <p className="mb-4">
            Users are fully responsible for ensuring that any content they share
            on the app is lawful and does not infringe on the rights of others.
          </p>
          <p>
            The app assumes no responsibility for the accuracy or legality of
            user-shared content.
          </p>
        </div>
      </div>

      {/* French Version */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <Image
            src="https://flagcdn.com/fr.svg"
            alt="France Flag"
            width={24}
            height={24}
            className="w-6 h-6 mr-2"
          />
          <h2 className="text-2xl font-semibold">Français</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">
            1. Propriété du Contenu
          </h3>
          <p className="mb-4">
            Les utilisateurs conservent la pleine propriété de tout le contenu
            et les données qu&apos;ils partagent sur l&apos;application.
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
            Les utilisateurs sont seuls responsables et imputables du contenu
            qu&apos;ils partagent sur l&apos;application.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            3. Utilisation des Données Personnelles
          </h3>
          <p className="mb-4">
            Les utilisateurs acceptent que certaines de leurs données soient
            utilisées à des fins publicitaires.
          </p>
          <p className="mb-4">
            L&apos;application ne suit pas les données personnelles, mais peut
            utiliser des données comportementales pour proposer des suggestions
            personnalisées basées sur les habitudes des utilisateurs.
          </p>
          <p>
            L&apos;application ne partage pas les données personnelles avec des
            tiers sauf en cas d&apos;obligation légale.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            4. Responsabilité des Utilisateurs
          </h3>
          <p className="mb-4">
            Les utilisateurs sont entièrement responsables de s&apos;assurer que
            tout contenu qu&apos;ils partagent sur l&apos;application est licite
            et ne viole pas les droits des autres.
          </p>
          <p>
            L&apos;application décline toute responsabilité quant à
            l&apos;exactitude ou la légalité du contenu partagé par les
            utilisateurs.
          </p>
        </div>
      </div>

      {/* Malagasy Version */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <Image
            src="https://flagcdn.com/mg.svg"
            alt="Madagascar Flag"
            width={24}
            height={24}
            className="w-6 h-6 mr-2"
          />
          <h2 className="text-2xl font-semibold">Malagasy</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">1. Fananana ny Votoaty</h3>
          <p className="mb-4">
            Ny mpampiasa dia mitazona tanteraka ny fananan’izy ireo rehetra sy
            ny angona zarainy ao amin’ny fampiharana.
          </p>
          <p className="mb-4">
            Manan-jo hanaisotra ny votoatiny amin’ny fotoana rehetra na
            mitatitra angon-drakitra very na nangalarina ny mpampiasa.
          </p>
          <p>
            Ny fampiharana dia sehatra fotsiny ary tsy manao an’izay votoaty
            ampiasain’ny mpampiasa ho fananany.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            2. Fanaraha-maso ny Votoaty
          </h3>
          <p className="mb-4">
            Ny fampiharana dia miezaka mifehy ny votoaty mba hiantohana tontolo
            azo antoka sy atokisana.
          </p>
          <p>
            Ny mpampiasa dia tompon’andraikitra feno sy azo itokisana amin’ny
            votoaty zarainy ao amin’ny fampiharana.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            3. Fampiasana ny Angon-drakitra Manokana
          </h3>
          <p className="mb-4">
            Ny mpampiasa dia manaiky ny hampiasaina ny angon-drakitra sasany ho
            an’ny dokambarotra.
          </p>
          <p className="mb-4">
            Ny fampiharana dia tsy manara-maso angon-drakitra manokana fa mety
            hampiasa angon-drakitra mikasika ny fitondran’tena mba hanolorana
            soso-kevitra manokana mifanaraka amin’ny fahazarana ampiasain’ny
            mpampiasa.
          </p>
          <p>
            Ny fampiharana dia tsy mizara angon-drakitra manokana amin’ny antoko
            fahatelo raha tsy hoe noho ny antony ara-dalàna.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            4. Andraikitry ny Mpampiasa
          </h3>
          <p className="mb-4">
            Ny mpampiasa dia tompon’andraikitra feno amin’ny fanamarinana fa
            ara-dalàna ny votoaty zarainy ary tsy mandika ny zon’ny hafa.
          </p>
          <p>
            Ny fampiharana dia tsy tompon’andraikitra amin’ny fahamarinan’ny na
            ny ara-dalàna ny votoaty zarain’ny mpampiasa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tos;
