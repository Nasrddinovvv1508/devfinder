// rect router dom
import { Link } from "react-router-dom"

// react icons
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

// "https://avatars.githubusercontent.com/u/176285989?v=4"
// "https://avatars.githubusercontent.com/u/156794476?v=4"

function UserData({ user, error, isPending }) {

  // functions
  function avatarUrl(urlImg) {
    let leftPart = urlImg.split('/u')[0];
    console.log(leftPart);
    return leftPart;
  }

  const leftUrlPart = avatarUrl('https://avatars.githubusercontent.com/u/156794476?v=4');

  function formatDate(isoDate) {
    const date = new Date(isoDate);

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate.replace(/,/, ''); // remove the comma
  }

  let isoDate = formatDate(user?.created_at)

  return (
    <>
      {
        isPending ?
          <div className="w-full flex justify-center">
            <img className="w-[75px] bg-transparent" src="../assets/loader.svg" alt="loader" />
          </div>
          :
          <div>
            {error ? <div className="text-4xl">
              {error}
            </div> :
              <div
                className="main-container p-[48px] bg-white rounded-[15px] flex flex-col items-end"
                style={{
                  boxShadow: `0px 16px 30px -10px #4660BB33`
                }}>
                <div className="flex items-center w-full gap-[37px]">
                  <img className="w-[150px] rounded-full" src={user?.avatar_url} alt="meow" />
                  <div className="w-full flex flex-col ">
                    <div className="w-full flex justify-between ">
                      <div>
                        <h1 className="font-bold text-[26px] mb-[2px]">{user.name ? user.name : `unnamed user`}</h1>
                        <Link to={user.html_url} className="text-[16px] text-[#0079FF]">
                          @{user.login}
                        </Link>
                      </div>
                      <p className="text-[15px] text-[#697C9A]">
                        Joined {isoDate}
                      </p>
                    </div>

                    <div className="text-[15px] text-[#697C9A] w-10/12 h-[67px] overflow-hidden">
                      <p className="mt-[20px] text-[15px] text-[#4B6A9B] opacity-75 capitalize">
                        {user.bio ? user.bio : `No bio! Is this a profile from another universe?`}
                      </p>
                    </div>
                  </div>



                </div>

                <div className="w-3/4 mt-[32px]">
                  <div className="mb-[37px] bg-[#F6F8FF] pt-[15px] pr-[83px] pb-[17px] pl-[32px] rounded-[15px] flex justify-between">
                    <div>
                      <span className="text-[15px] text-[#4B6A9B]">Repos</span>
                      <p className="font-bold text-[22px] text-[#2B3442]"> {user.public_repos} </p>
                    </div>

                    <div>
                      <span className="text-[15px] text-[#4B6A9B]">Followers</span>
                      <p className="font-bold text-[22px] text-[#2B3442]">{user.followers}</p>
                    </div>

                    <div>
                      <span className="text-[15px] text-[#4B6A9B]">Following</span>
                      <p className="font-bold text-[22px] text-[#2B3442]"> {user.following} </p>
                    </div>
                  </div>

                  <div className="flex items-end gap-[62px]">
                    <div>
                      <div className={`flex items-center gap-[19px] mb-[21px] ${!user.location ? `opacity-50` : ''}`}>
                        <img src="../assets/location.svg" alt="location" />
                        <p className="text-[15px] text-[#4B6A9B]"> {user.location ? user.location : `It’s a mystery!`} </p>
                      </div>

                      <div className="flex items-center gap-[19px]">
                        <RiInstagramFill size={20} color="#4B6A9B" />
                        <Link className="text-[15px] text-[#4B6A9B]">instagram</Link>
                      </div>
                    </div>

                    <div>
                      <div className={`flex items-center gap-[19px] mb-[21px] hover:text-[#0079FF] ${!user.twitter_username ? `opacity-50` : ''}`}>
                        <FaTwitter size={20} color="#4B6A9B" style={{ hover: `color: ` }} />
                        <Link className="text-[15px] text-[#4B6A9B]"> {user.twitter_username ? user.twitter_username : `not yet`} </Link>
                      </div>

                      <div className={`flex items-center gap-[19px] ${!user.company ? `opacity-50` : ``}`}>
                        <img src="../assets/company.svg" alt="location" />
                        <p className={`text-[#4B6A9B] ${!user.company ? `text-[15px]` : 'text-[15px]'}`}> {user.company ? user.company : `stealth mode!🤐`} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }

          </div>
      }
    </>
  )
}

export default UserData