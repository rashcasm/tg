import balmimg from "../images/balm.jpg";
import becoimg from "../images/beco.jpg";
import brufenimg from "../images/brufen.jpg";
import cetlergyimg from "../images/cetlergy.jpg";
import gelusilimg from "../images/gelusil.jpg";
import meftalpimg from "../images/meftalp.jpg";
import orsimg from "../images/ors.jpg";
import paracetomolimg from "../images/paracetomol.jpg";
import sinarestimg from "../images/sinarest.jpg";
import vicksimg from "../images/vicks.jpg";

export function getData() {
  return [
    { title: "Vicks", price: 45, Image: vicksimg,id:1 },
    { title: "balm", price: 100, Image: balmimg,id:2 },
    { title: "becosules", price: 48, Image: becoimg ,id:3},
    { title: "brufen", price: 20, Image: brufenimg,id:4 },
    { title: "cetlergy", price: 20, Image: cetlergyimg,id:5 },
    { title: "gelusil", price: 125, Image: gelusilimg,id:6 },
    { title: "meftal-p", price: 37, Image: meftalpimg,id:7 },
    { title: "ORS", price: 20, Image: orsimg,id:8 },
    { title: "paracetomol", price: 50, Image: paracetomolimg,id:9 },
    { title: "sinarest", price: 84, Image: sinarestimg,id:10 },
  ];
}
