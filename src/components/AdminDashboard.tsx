import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { GameState } from '../types';
import Button from './common/Button';

interface AdminDashboardProps {
  onBack: () => void;
}

interface UserRow {
  user_id: string;
  email?: string;
  display_name?: string;
  is_admin: boolean;
  game_state?: GameState;
  last_active?: string;
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, active7d: 0, totalLessons: 0 });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);

    // Fetch profiles
    const { data: profiles } = await supabase
      .from('greekheb_profiles')
      .select('user_id, display_name, is_admin, created_at');

    // Fetch progress
    const { data: progress } = await supabase
      .from('greekheb_progress')
      .select('user_id, game_state, updated_at');

    const progressMap = new Map(
      (progress || []).map((p: any) => [p.user_id, p])
    );

    const merged: UserRow[] = (profiles || []).map((p: any) => {
      const prog = progressMap.get(p.user_id) as any;
      return {
        user_id: p.user_id,
        display_name: p.display_name,
        is_admin: p.is_admin,
        game_state: prog?.game_state,
        last_active: prog?.updated_at,
      };
    });

    setUsers(merged);

    // Compute stats
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const active7d = merged.filter(u =>
      u.last_active && new Date(u.last_active) > weekAgo
    ).length;
    const totalLessons = merged.reduce((sum, u) => {
      if (!u.game_state) return sum;
      const gs = u.game_state as GameState;
      return sum + (gs.greek?.completedLessons?.length || 0) + (gs.hebrew?.completedLessons?.length || 0);
    }, 0);

    setStats({ total: merged.length, active7d, totalLessons });
    setLoading(false);
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const getUserProgress = (gs?: GameState) => {
    if (!gs) return { greek: 0, hebrew: 0, xp: 0 };
    return {
      greek: gs.greek?.completedLessons?.length || 0,
      hebrew: gs.hebrew?.completedLessons?.length || 0,
      xp: gs.totalXp || 0,
    };
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">관리자 대시보드</h1>
          <p className="text-duo-text-dim text-sm">GreekHeb Duolingo</p>
        </div>
        <button onClick={onBack} className="text-duo-text-dim hover:text-duo-text cursor-pointer">
          ← 돌아가기
        </button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-duo-card rounded-xl p-4 text-center"
        >
          <div className="text-3xl font-bold text-duo-blue">{stats.total}</div>
          <div className="text-duo-text-dim text-sm">전체 사용자</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-duo-card rounded-xl p-4 text-center"
        >
          <div className="text-3xl font-bold text-duo-green">{stats.active7d}</div>
          <div className="text-duo-text-dim text-sm">7일 활성</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-duo-card rounded-xl p-4 text-center"
        >
          <div className="text-3xl font-bold text-duo-yellow">{stats.totalLessons}</div>
          <div className="text-duo-text-dim text-sm">총 완료 레슨</div>
        </motion.div>
      </div>

      {/* User table */}
      <div className="bg-duo-card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-duo-card-light flex justify-between items-center">
          <h2 className="font-bold">사용자 목록</h2>
          <Button onClick={loadUsers} size="sm">새로고침</Button>
        </div>

        {loading ? (
          <div className="p-8 text-center text-duo-text-dim">로딩 중...</div>
        ) : users.length === 0 ? (
          <div className="p-8 text-center text-duo-text-dim">등록된 사용자가 없습니다</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-duo-text-dim text-left border-b border-duo-card-light">
                  <th className="p-3">이름</th>
                  <th className="p-3">역할</th>
                  <th className="p-3 text-center">그리스어</th>
                  <th className="p-3 text-center">히브리어</th>
                  <th className="p-3 text-center">XP</th>
                  <th className="p-3">최근 활동</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => {
                  const prog = getUserProgress(u.game_state);
                  return (
                    <tr key={u.user_id} className="border-b border-duo-card-light/50 hover:bg-duo-card-light/30">
                      <td className="p-3">
                        <div className="font-medium">{u.display_name || '(이름 없음)'}</div>
                      </td>
                      <td className="p-3">
                        {u.is_admin ? (
                          <span className="text-duo-orange font-medium">Admin</span>
                        ) : (
                          <span className="text-duo-text-dim">User</span>
                        )}
                      </td>
                      <td className="p-3 text-center">{prog.greek}개</td>
                      <td className="p-3 text-center">{prog.hebrew}개</td>
                      <td className="p-3 text-center font-medium text-duo-yellow">{prog.xp}</td>
                      <td className="p-3 text-duo-text-dim">{formatDate(u.last_active)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
