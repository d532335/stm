import { Component, OnInit } from '@angular/core';
import { IFAQItem } from '../faqs/faqs.component';

@Component({
  selector: 'stm-massage-faqs',
  templateUrl: './massage-faqs.component.html',
  styleUrls: ['./massage-faqs.component.scss']
})
export class MassageFaqsComponent implements OnInit {
  
  generalFAQs: IFAQItem[] = [
    {
      id: 1,
      title: "Must I Be Completely Undressed?",
      content: "I ask my clients to disrobe to their level of comfort. Most massage and bodywork techniques are traditionally performed with the client unclothed and the only body part that will be exposed will be the area I am working on."
    },
    {
      id: 2,
      title: "Will the Therapist Be Present When I Disrobe?",
      content: "I will leave the room or step behind a curtain to give you time to undress, get comfortable on the table and relax."
    },
    {
      id: 3,
      title: "What Parts of My Body Will Be Massaged?",
      content: "I like to tell my clients that it is your time and we will decide together what will best meet your session expectations. Some people prefer to have their entire body massaged during a session, while others desire only specific trouble areas."
    },
    {
      id: 4,
      title: "Will Lubricant Be Used?",
      content: "I prefer a water based cream that is easily absorbed by the skin and doesn't leave you feeling oily afterwards. I also use high quality almond and grapeseed oils for those who prefer the moisture and glow of an oil over a cream."
    },
    {
      id: 5,
      title: "What Will the Massage or Bodywork Feel Like?",
      content: "That will depend on the techniques used. A general Swedish massage begins with long, flowing strokes that calm and sedate the nervous system. Pressure increases as the muscles relax, but not to the point of discomfort. It is your responsibility as the client to communicate any discomforts you have immediately so that you enjoy your session as much as possible."
    },
    {
      id: 6,
      title: "How Long Will the Session Last?",
      content: "I offer 30 min, one hour and 90 minute sessions."
    },
    {
      id: 7,
      title: "What Should I Do During the Massage or Bodywork Session?",
      content: "Relax and make yourself as comfortable as possible. I will guide you through any movement or action required of you for our session. Feel free to ask any questions about any of the techniques you are receiving."
    },
    {
      id: 8,
      title: "What if I am late for an appointment?",
      content: "If you are late for an appointment the session will be adjusted to perform as much of the treatment as possible within the remaining time. Pricing will not be adjusted."
    },
    {
      id: 9,
      title: "What preparations do I need to make?",
      content: "Try to limit intake of food prior to your session to light meals, preferably of whole foods. Also, water intake is very important prior to and after bodywork. You will want to make sure you allow time to use the rest room prior to your appointment."
    },
    {
      id: 10,
      title: "Should I inform my therapist if I have any ailments or allergies?",
      content: "Yes. Please notify me as soon as you can. Adjustments to some treatments can be made or alternative treatments may be substituted. If you require special assistance, please let me know so that I can assure you a pleasant experience."
    },
    {
      id: 11,
      title: "How frequently should I schedule massage appointments to feel the greatest benefit?",
      content: "The benefits of massage are greatest over time. If you have decided to use massage to treat long term pain management, more frequent sessions may be necessary in the beginning to return the muscles to a more manageable condition. People's need for massage varies with person and conditions. Some do well on monthly visits while others need to work more frequently. You and I will discuss your goals and determine the best schedule for you and your needs."
    }
	];

  constructor() { }

  ngOnInit() {
  }

}
