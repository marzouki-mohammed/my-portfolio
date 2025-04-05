
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegThumbsUp, FaRegCommentDots, FaShare, FaPaperPlane } from "react-icons/fa";
import RedHeart from "../assets/RedHeart.png"
import ThumbsUp from "../assets/ThumbsUp.png"
import ClappingHands from "../assets/ClappingHands.png"


const PostFooter = () => {
  const avatars = [
    { src: "https://i.pravatar.cc/40?img=1", emoji: RedHeart  },
    { src: "https://i.pravatar.cc/40?img=2", emoji: ThumbsUp },
    { src: "https://i.pravatar.cc/40?img=3", emoji: ClappingHands },
    { src: "https://i.pravatar.cc/40?img=1", emoji: RedHeart  },
    { src: "https://i.pravatar.cc/40?img=2", emoji: ThumbsUp },
    { src: "https://i.pravatar.cc/40?img=3", emoji: ClappingHands },
    { src: "https://i.pravatar.cc/40?img=1", emoji: RedHeart  },
    { src: "https://i.pravatar.cc/40?img=2", emoji: ThumbsUp },
    { src: "https://i.pravatar.cc/40?img=3", emoji: ClappingHands }
  ];

  return (
    <>
        <div className="d-flex gap-2 fs-6 mt-2">
          <div className="d-flex">
            <img src={RedHeart} width="25" height="25"
                 className="border rounded-circle object-fit-cover "
             
             alt="" />
            <img src={ThumbsUp} width="25" height="25"
             className="border rounded-circle object-fit-cover "
             style={{marginLeft:"-10px"}}
             alt="" />
            <img src={ClappingHands} width="25" height="25"
             className="border rounded-circle object-fit-cover "
             style={{marginLeft:"-10px"}}

             alt="" />

          </div>
          <p className="text-muted p-0 m-0">Abdelah harit et 25 autre</p>

            
        </div>

        <div className="border-top pt-3 mt-3">
        {/* Réactions */}
        {/* <div className="d-flex align-items-center mb-2">
            {avatars.slice(0, 8).map((avatar, index) => (
            <div key={index} className="position-relative me-1" style={{ width: "35px" }}>
                <img
                src={avatar.src}
                alt={`Avatar ${index}`}
                className="rounded-circle border"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <span
                className="position-absolute top-0 start-100 translate-middle badge bg-white text-dark"
                style={{ fontSize: "0.65rem" }}
                >
                <img src={avatar.emoji} 
                     width="25" height="25"
                     className="border rounded-circle object-fit-cover "
                     alt="" />
                
                </span>
            </div>
            ))}
            <div className="ms-3 text-muted">+13</div>
        </div> */}

        {/* Boutons */}
        <div className="d-flex justify-content-around text-muted mb-3 mt-3 gap-1">
            
                <div className="fs-6"><FaRegThumbsUp /> J’aime</div>
                <div className="fs-6"><FaRegCommentDots /> Commenter</div>
                <div className="fs-6"><FaShare /> Republier</div>
                <div className="fs-6"><FaPaperPlane /> Envoyer</div>

        </div>

        {/* Impressions */}
        <div className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
            📊 567 impressions – <a href="#" className="text-decoration-none">Voir les statistiques</a>
        </div>

        {/* Champ commentaire */}
        <div className="d-flex align-items-center border rounded-pill px-3 py-2">
            <img
            src="https://i.pravatar.cc/30?img=9"
            alt="user"
            className="rounded-circle me-2"
            style={{ width: "30px", height: "30px" }}
            />
            <input
            type="text"
            className="form-control border-0"
            placeholder="Ajouter un commentaire..."
            />
            <div className="ms-2">
            <span role="img" aria-label="emoji">😊</span>
            </div>
        </div>
        </div>
    </>
    
  );
};

export default PostFooter;
