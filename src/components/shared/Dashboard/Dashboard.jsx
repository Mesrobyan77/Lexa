import MiniBarChart from "../../../assets/icons";
import { inboxData, metricCards, statData } from "../../../costants/dsahboard";
import ActivityFeed from "../../ui/ActivityFeed/ActivityFeed";
import Card from "../../ui/Card/Card";
import ChartRenderer from "../../ui/ChartRenderer/ChartRenderer";
import InboxItem from "../../ui/InboxItem/InboxItem";
import MetricRow from "../../ui/MetricRow/MetricRow";
import StatCard from "../../ui/StatCard/StatCard";
import { Link } from "react-router-dom";
import { TablesRow } from "../../ui/TablesRow/TablesRow";
import { FaQuoteLeft } from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <main className="ds-main">
      <div className="ds-page">
        <div className="ds-container">
          <section className="card-section">
            {statData.map((s) => {
              const Icon = s.icon;
              return (
                <StatCard
                  key={s.id}
                  title={s.title}
                  value={s.value}
                  badgeText={s.badgeText}
                  badgeType={s.badgeType}
                  icon={<Icon size={22} />}
                />
              );
            })}
          </section>

          <section className="chart-container">
            {metricCards.map((card) => (
              <Card key={card.id} title={card.title}>
                <MetricRow items={card.items} className="sec" />
                <div className="chart-body">
                  <ChartRenderer chart={card.chart} />
                </div>
              </Card>
            ))}
          </section>

          <section className="widgets">
            <Card title="Inbox" className="widget widget-inbox">
              <div className="inbox-list">
                {inboxData.map((item) => (
                  <InboxItem
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    text={item.text}
                    time={item.time}
                  />
                ))}
              </div>
            </Card>

            <Card title="Recent Activity Feed" className="widget widget-feed">
              <ol className="feed feed-timeline">
                <ActivityFeed
                  date="JUN 25"
                  text="Responded to need “Volunteer Activities”"
                />
                <ActivityFeed
                  date="JUN 24"
                  text="Added an interest “Volunteer Activities”"
                />
                <ActivityFeed
                  date="JUN 23"
                  text="Joined the group “Boardsmanship Forum”"
                />
                <ActivityFeed
                  date="JUN 21"
                  text="Responded to need “In-Kind Opportunity”"
                />
              </ol>

              <div className="center">
                <button className="btn btn-primary">Load More</button>
              </div>
            </Card>

            <div className="right-column">
              <div className="quote-card">
                <div className="quote-top">
                  <FaQuoteLeft
                    size={32}
                    color="#fff"
                    strokeWidth={3}
                    style={{ opacity: 0.5 }}
                  />
                  <p className="quote-text">
                    The European languages are members of the same family. Their
                    separate existence is a myth.
                  </p>
                </div>

                <div className="quote-bottom">
                  <img
                    className="avatar"
                    src="https://i.pravatar.cc/150?u=5"
                    alt="Marie Minnick"
                  />
                  <div>
                    <h6 className="person-name">Marie Minnick</h6>
                    <p className="person-role">Marketing Manager</p>
                  </div>
                </div>
              </div>

              <Card title="Yearly Sales" className="widget widget-sales">
                <div className="sales">
                  <div className="languages">
                    <div>
                      <h3 className="sales-number">52,345</h3>
                      <p className="muted">The languages only differ grammar</p>
                    </div>
                    <Link className="learn-more">Learn More</Link>
                  </div>
                  <MiniBarChart width={200} height={100} color="#7a6fbe" />
                </div>
              </Card>
            </div>
          </section>

          <TablesRow />
        </div>
      </div>
    </main>
  );
}
