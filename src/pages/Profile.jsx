import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { useApp } from "../context/AppContext";

export default function Profile() {
  const { user, setUser } = useApp();
  const [form, setForm] = useState(user);
  const [saved, setSaved] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setUser(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="Personalise your wellbeing space"
        description="Update basic profile details and your current wellbeing goal."
      />

      {saved && <div className="alert success" role="status">Profile updated.</div>}

      <section className="profile-grid">
        <article className="card profile-summary">
          <div className="profile-avatar">
            {user.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <div className="profile-meta">
            <span>Member since</span>
            <strong>August 2026</strong>
          </div>
          <div className="profile-meta">
            <span>Current goal</span>
            <strong>{user.goal}</strong>
          </div>
        </article>

        <article className="card">
          <h2>Edit profile</h2>
          <form className="form-stack" onSubmit={submit}>
            <label className="field">
              <span>Full name</span>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </label>
            <label className="field">
              <span>Wellbeing goal</span>
              <textarea rows="4" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} required />
            </label>
            <button className="button primary" type="submit">Save changes</button>
          </form>
        </article>
      </section>
    </>
  );
}
