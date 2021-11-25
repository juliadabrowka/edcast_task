import { Injectable } from '@angular/core';

export interface Instructor {
  name: string;
  company: string;
  companyPic: string;
  picture: string;
  city: string;
}

const instructors: Instructor[] = [
  {
      "name": "Edwin Bush",
      "company": "Owens-Illinois Inc",
      "companyPic" : "https://random.imagecdn.app/500/150",
      "city": "Congo",
      "picture": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
  },
  {
      "name": "Justin Malone",
      "company": "Smithfield Foods Inc",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Rwanda",
      "picture": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
  },
  {
      "name": "Isabel Love",
      "company": "The Allstate Corporation",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Comoros",
      "picture": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
  },
  {
      "name": "Nancy Burton",
      "company": "ARAMARK Corporation",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Lao People's Democratic Republic",
      "picture": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
  },
  {
      "name": "Wendy Wagner",
      "company": "Kriot",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Isle of Man",
      "picture": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
  },
  {
      "name": "Theo Lewis",
      "company": "Anything",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Virgin Islands, British",
      "picture": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
  },
  {
      "name": "Esther Burns",
      "company": "Whate",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Serbia",
      "picture": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
  },
  {
      "name": "Jackob Thomas",
      "company": "Annything DIgital",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Mali",
      "picture": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
  },
  {
      "name": "Laiba Ness",
      "company": "Anyzo",
      "companyPic": "https://random.imagecdn.app/500/150",
      "city": "Somalia",
      "picture": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
  }
]

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getInstructors(): Instructor[] {
    return instructors
  }
}
