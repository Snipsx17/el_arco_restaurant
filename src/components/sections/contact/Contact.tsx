import SectionHeader from "@/components/SectionHeader";
import { ContactSection } from "@/sanity/types";
import { Mail, MapPinned, Phone } from "lucide-react";
import ContactRecaptchaWrapper from "./ContactRecaptchaWrapper";

interface Props {
    data: ContactSection;
}
export default function Contact({ data }: Props) {
    const { pretitle, title, description, information } = data;
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-10 px-5 py-10 md:py-24 md:p-28">

            <div className="flex w-full md:w-1/2 flex-col gap-8">
                <SectionHeader title={title} pretitle={pretitle} description={description} alignment="left" />

                <div className="flex justify-start items-center gap-4 text-gold">
                    <MapPinned className="text-gold inline mr-2" /> <a href="https://maps.app.goo.gl/pn1iG4A7JGaS7SpDA" target="_blank" className="text-gold!">{information.address}</a>
                </div>

                <div className="flex justify-start items-center gap-4">
                    <a href={`tel:${information.telephone}`} className="text-gold!"><Phone className="text-gold inline mr-4" /> {information.telephone}</a>
                </div>

                <div className="flex justify-start items-center gap-4 text-gold">
                    <a href={`mailto:${information.email}`} className="text-gold!"><Mail className="text-gold inline mr-4" /> {information.email}</a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex-col items-start">
                <h2 className="text-4xl">Horario</h2>
                
                <ContactRecaptchaWrapper />
            </div>
        </section>
    )
}
