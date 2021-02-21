import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
import image from "../../../../assests/path.png";

//mui
import Typography from "@material-ui/core/Typography";

const Welcome = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5" align="center" className={"tab-title"}>
        This short tutorial will walk you through all of the features of this
        application.
      </Typography>
      <div className={"logo-img"}>
        <img src={image} alt="path" />
      </div>
    </motion.div>
  );
};

export default Welcome;
