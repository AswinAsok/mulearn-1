import { Dispatch, SetStateAction } from "react";
import styles from "../LcDashboard.module.css";
import karmaIcon from "../../../assets/karma.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import level7 from "../../../assets/images/Level 7.svg";
import { BiDotsVertical } from "react-icons/bi";
import LeadIcon from "../../../assets/images/Lead icon.svg";

type Props = {
    setTemp: Dispatch<SetStateAction<LcDashboardTempData>>;
    temp: LcDashboardTempData;
    members: LcMembers[];
};

const LcTeam = (props: Props) => {
    return (
        <div className={styles.ContainerWrapper}>
            <div className={styles.SwitchNav}>
                <button
                    className={styles.items}
                    onClick={() =>
                        props.setTemp({
                            ...props.temp,
                            isReport: false,
                            isHistory: false,
                            isTeam: false,
                            isSchedule: false
                        })
                    }
                >
                    Meet
                </button>
                <button
                    className={styles.items + " " + styles.active}
                    onClick={() =>
                        props.setTemp({
                            ...props.temp,
                            isTeam: true
                        })
                    }
                >
                    Team
                </button>
            </div>
            <div className={styles.ContentWrapper}>
                <TeamList members={props.members} />
            </div>
        </div>
    );
};

const TeamList = ({ members }: { members: LcMembers[] }) => {
    return (
        <div className={styles.teamList}>
            {members.map((member, index) => (
                <TeamMember
                    member={member}
                    index={index + 1}
                    key={`mem${index}`}
                />
            ))}
        </div>
    );
};

const TeamMember = ({
    member,
    index
}: {
    member: LcMembers;
    index: number;
}) => {
    return (
        <div className={styles.memberBar}>
            <span>{index}.</span> <img src={member.profile_pic} alt="DP" />{" "}
            <span className={styles.name}>{member.username}</span>
            <p>Level{member.level || " 0"}</p>
            <img src={level7} alt="" />
            {member.is_lead ? (
                <img src={LeadIcon} alt="" className={styles.karma} />
            ) : (
                ""
            )}
            <span className={member.is_lead ? "" : styles.karma}>
                {member.karma}μ
            </span>
            <BiDotsVertical />
        </div>
    );
};

export default LcTeam;
